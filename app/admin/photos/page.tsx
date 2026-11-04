import { AdminShell, PageTitle, SavedNotice } from "@/components/admin/AdminShell";
import { PhotoPicker } from "@/components/admin/PhotoPicker";
import { resetSitePhoto } from "@/lib/cms/actions";
import { requireSignIn } from "@/lib/cms/auth";
import { editablePhotos } from "@/lib/cms/fields";
import { readCmsFresh } from "@/lib/cms/store";
import { images } from "@/content/images";

const shapeClass = { wide: "aspect-[16/10]", tall: "aspect-[4/5]", square: "aspect-square" } as const;
const shapeTip = {
  wide: "Works best with a landscape (wide) photo.",
  tall: "Works best with a portrait (tall) photo.",
  square: "Works best with a square image.",
} as const;

export default async function PhotosPage({ searchParams }: { searchParams: { saved?: string } }) {
  requireSignIn();
  const cms = await readCmsFresh();
  const saved =
    searchParams.saved === "reset"
      ? "Done. The original photo is back on the website."
      : searchParams.saved
        ? "Saved. Your new photo is now on the website."
        : undefined;

  return (
    <AdminShell crumbs={[{ label: "Photos" }]}>
      <PageTitle
        title="Photos"
        intro="Find the photo you want to change and press Choose a new photo. It goes on the website straight away."
      />
      <SavedNotice message={saved} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {editablePhotos.map((photo) => {
          const replaced = cms.images[photo.key];
          const src = replaced || (images as Record<string, string>)[photo.key];
          return (
            <div key={photo.key} className="flex flex-col rounded-xl border border-border bg-[#FCFBF3] p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className={`${shapeClass[photo.shape]} w-full rounded-lg object-cover`} />
              <h2 className="mt-4 font-heading text-[1.4rem] font-light leading-tight text-forest">{photo.label}</h2>
              <p className="mt-1 text-sm text-muted">{photo.where}</p>
              <p className="mt-1 text-sm text-muted">{shapeTip[photo.shape]}</p>
              <div className="mt-auto pt-4">
                <PhotoPicker mode="site" photoKey={photo.key} />
                {replaced ? (
                  <form action={resetSitePhoto} className="mt-2">
                    <input type="hidden" name="key" value={photo.key} />
                    <button type="submit" className="text-sm text-muted underline underline-offset-2 hover:text-sienna-deep">
                      Put back the original photo
                    </button>
                  </form>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </AdminShell>
  );
}

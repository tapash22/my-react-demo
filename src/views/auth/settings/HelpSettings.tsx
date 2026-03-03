import { PageHeaderCard } from "../../../components/cards/PageHeaderCard";

export function HelpSettings() {
  return (
    <div className="p-3 w-full h-auto bg-(--background) flex flex-col space-y-5">
      <div className="w-full h-auto  ">
        <div className="p-2">
          <PageHeaderCard title="Help Resources" visibleDate={false} />
          <div className="w-full grid grid-cols-3 gap-3">
            <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl p-5">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus voluptate quasi, cum, facilis suscipit aliquam animi
                illum accusantium quod, maxime ipsa inventore? Molestias
                deleniti cumque non doloremque possimus! Unde, pariatur?
              </p>
            </div>
            <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl p-5">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus voluptate quasi, cum, facilis suscipit aliquam animi
                illum accusantium quod, maxime ipsa inventore? Molestias
                deleniti cumque non doloremque possimus! Unde, pariatur?
              </p>
            </div>
            <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl p-5">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Delectus voluptate quasi, cum, facilis suscipit aliquam animi
                illum accusantium quod, maxime ipsa inventore? Molestias
                deleniti cumque non doloremque possimus! Unde, pariatur?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

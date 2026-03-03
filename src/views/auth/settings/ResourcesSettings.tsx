import { PageHeaderCard } from "../../../components/cards/PageHeaderCard";

export function ResourcesSettings() {
  return (
    <div className="p-3 w-full h-auto bg-(--background) flex flex-col space-y-5">
      <div className="w-full h-auto  ">
        <div className="p-2">
          <PageHeaderCard title="Learning Resources" visibleDate={false} />
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
      <div className="w-full h-auto  flex flex-col  ">
        <div className="p-2 grid-cols-2 gap-3">
          <PageHeaderCard
            title="Financial Calculators"
            subtitle="Add an extra layer of security to your account"
            visibleDate={false}
          />

          <div className="w-full grid grid-cols-2 gap-3">
            <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl p-3">
              <PageHeaderCard
                title="Enable2FA"
                subtitle="Send a code to your phone or email when logging in."
                visibleDate={false}
              />
            </div>
            <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl p-3">
              <PageHeaderCard
                title="Enable2FA"
                subtitle="Send a code to your phone or email when logging in."
                visibleDate={false}
              />
            </div>
            <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl p-3">
              <PageHeaderCard
                title="Enable2FA"
                subtitle="Send a code to your phone or email when logging in."
                visibleDate={false}
              />
            </div>
            <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl p-3">
              <PageHeaderCard
                title="Enable2FA"
                subtitle="Send a code to your phone or email when logging in."
                visibleDate={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

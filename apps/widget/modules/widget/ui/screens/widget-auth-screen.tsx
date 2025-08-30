import { WidgetHeader } from "../components/widget-header";

export const WidgetAuthScreen = () => {
  return (
    <>
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6 font-semibold">
          <p className="text-3xl">Hi there! 👋</p>
          <p className=" text-lg">Let&apos;s get you started</p>
        </div>
      </WidgetHeader>
    </>
  );
};

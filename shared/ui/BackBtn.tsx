import BackArrow from "../../public/BackArrow.svg";

export default function BackBtn() {
  return (
    <button className="max-h-[56px] max-w-[56px] rounded-3xl border-[2px] border-btn bg-gradient-to-bl from-backBtnGradient2 to-backBtnGradient1 px-[1.22rem] py-[1.315rem]">
      <BackArrow />
    </button>
  );
}

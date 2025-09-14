import ContactImg from "@/assets/images/cta.webp";
import ContactImgSVG from "@/assets/images/Book_a_call.svg?url";
import LeftArrow from "@/assets/icons/LeftArrow.svg";

const Contact = () => {
  return (
    <div className="py-[140px] px-10 flex items-center justify-center gap-x-8">
      <div className="bg-[#F7F7F7] w-[724px] rounded-[20px] py-[30px] px-[40px] gap-x-[23px]">
        <img className="px-24" src={ContactImgSVG} alt="" />
        <h2 className="text-desc font-bold text-[36px]">Ready to Start?</h2>
        <p className="text-[#2B2B2B] pt-[12px] pb-[23px] text-[20px] ">
          We collaborate with leading global law firms to deliver investment,
          financing, and advisory solutions across the Web3 and capital markets
          landscape.
        </p>
        <button className="bg-[#B7995B] rounded-[12px] text-xl font-semibold flex gap-x-3 px-[26px] py-[14px] text-white">
          Arrange a Strategy Session
          <LeftArrow />
        </button>
      </div>
      <div className="bg-[#F7F7F7] w-[538px] rounded-[20px] py-[30px] px-[40px] gap-x-[23px]">
        <h2 className="text-desc font-bold text-[36px]">Send Message</h2>
        <p className="text-[#2B2B2B] pt-[12px] pb-[23px] text-[20px] ">
          We partner with top global law firms across investment, financing, and
          advisory. Work with us
        </p>

        <div className="space-y-4">
          <div className="flex justify-between gap-5">
            <div className="space-y-2">
              <label className="text-[20px] text-desc font-medium" htmlFor="">
                First Name
              </label>
              <input
                placeholder="First Name"
                className="px-[26px] py-[14px] rounded-[12px] border border-[#E6E6E6]"
                type="text"
              />
            </div>

            <div>
              <label className="text-[20px] text-desc font-medium" htmlFor="">
                Last Name
              </label>
              <input
                placeholder="Last Name"
                className="px-[26px] py-[14px] rounded-[12px] border border-[#E6E6E6]"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-between  gap-5">
            <div className="space-y-2">
              <label className="text-[20px] text-desc font-medium" htmlFor="">
                Email
              </label>
              <input
                placeholder="E-mail Address"
                className="px-[26px] py-[14px] rounded-[12px] border border-[#E6E6E6]"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[20px] text-desc font-medium" htmlFor="">
                Telephone Number
              </label>
              <input
                placeholder="e.g +87 762 77652"
                className="px-[26px] py-[14px] rounded-[12px] border border-[#E6E6E6]"
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[20px] text-desc font-medium" htmlFor="">
              Message
            </label>
            <textarea
              className="px-[26px] w-full h-[132px] py-[14px] rounded-[12px] border border-[#E6E6E6]"
              name=""
              id=""
            ></textarea>
          </div>

          <div className="mt-[30px]">
            <button className="bg-primary py-[18px] font-bold text-2xl w-full text-center rounded-full text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

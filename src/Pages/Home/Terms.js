import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
const Terms = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img src={treatment} class="lg:max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="lg:px-12">
          <h1 class="lg:text-5xl text-4xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Terms;

import Avatar from "./Avatar";
import user_image from "./Taofiqpic.jpg";
//Create a homepage component...
const Home = () => {
  return (
    <section className="home-page">
      <div>
        <h1>Welcome to Taofiq Abdulsalam 3MTT Cohort 1 Fellow Web App</h1>
        <Avatar alt="Taofiq Abdulsalam" image={user_image} />
      </div>
      <h1 className="user-name"> Taofiq Abdulsalam</h1>
      <div>
        <h1>
          <p className="user-bio">Software Engineer </p>
        </h1>
        <p>3MTT Cohort 1 Fellow at Sokoto State Nigeria</p>
        <p> Fellow ID: FE/23/25925323</p>
      </div>
      <h1><p>
        WBLT Tech Limited is a company that provide exceptional Software Development, Mobile App
        Development, CCTV Camera installation, Solar Energy Installation,
        Networking and technology services, tailored to meet your goals. WBLT
        TECH is a cutting-edge digital solutions provider. We bring our clients'
        digital ideas to life by offering premium Website & Mobile application
        development services, Digital Marketing, Custom & Turn-key software
        creation, and IT implementation, and support.
      </p></h1>
    </section>
  );
};
export default Home;

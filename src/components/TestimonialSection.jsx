import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "../assets/herosection.png";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sachin",
      role: "CEO at CompanyX",
      text: "DocWeb's platform has made our psychological assessments so much easier to manage and analyze. Highly recommend!",
      image: Image,
    },
    {
      name: "Dr. Ankit",
      role: "Therapist at Wellness Clinic",
      text: "The ease of use and comprehensive nature of the assessments provided by DocWeb have been invaluable for our team.",
      image: Image,
    },
    {
      name: "Dr. Ajit",
      role: "Clinical Psychologist",
      text: "A great tool for professionals and individuals alike. The assessments are thorough, user-friendly, and insightful.",
      image: Image,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#2a4f47] mb-12">
          What Our Clients Say
        </h2>
        <Slider {...settings} className="text-center p-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-4 !w-[350px] bg-white rounded-lg shadow-lg flex flex-col justify-between items-center text-center cursor-pointer"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-40 h-24 rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-[#2a4f47] mb-2">
                {testimonial.name}
              </h3>
              <p className="text-md text-[#555]">{testimonial.role}</p>
              <p className="text-[#777] mt-4">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;

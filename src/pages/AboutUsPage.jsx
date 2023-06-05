import React from "react";
import AboutUs from "../components/aboutUs/AboutUs";
import "../components/aboutUs/AboutUs.css";
import EmirImg from "../assets/aftors/msg-866107682-3127.jpg";
import MarlenImg from "../assets/aftors/msg-866107682-3128.jpg";

const AboutUsPage = () => {
  let aftorsArr = [
    {
      name: "Marlen",
      image: MarlenImg,
      description: "Teamlid",
      id: 1,
    },
    {
      name: "Elina",
      description: "Ultra Mega Back",

      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Taxidea_taxus_2.jpg",
      id: 2,
    },
    {
      name: "Emir",
      description: "Pushka",
      image: EmirImg,
      id: 3,
    },
    {
      name: "Sultan",
      description: "Director & Designer",

      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Taxidea_taxus_2.jpg",
      id: 4,
    },
    {
      name: "Meder",
      description: "Meder, prosto Meder",

      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Taxidea_taxus_2.jpg",
      id: 5,
    },
  ];
  return (
    <div className="container_creators">
      <h2>creators</h2>
      <div className="review_wrap">
        <div>
          {aftorsArr.map((item) => (
            <AboutUs key={item.id} item={item} />
          ))}
        </div>
        <form action="" className="review_form">
          <input type="text" placeholder="leave a review about the site..." />
          <button type="submit">
            Add to
            <i class="bi bi-trash3"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutUsPage;

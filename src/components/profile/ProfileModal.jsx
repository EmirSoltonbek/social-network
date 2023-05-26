import React from "react";
import "./ProfileModal.css";
import postImage from "../../assets/Image 01.jpg";

function ProfileModal({ setModal }) {
  return (
    <div className="profileModalContainer">
      <div className="profileInnerContainer">
        <div className="profileInnerContaier_image">
          <img src={postImage} alt="" width="100%" />
        </div>
        <div className="profileInnerContaier_text">
          <div
            style={{ display: "flex" }}
            className="profileInnerContainer_text_imgnick"
          >
            <div className="avatarImage1 ">
              <img
                src={postImage}
                alt=""
                width="100%"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div>nick_name</div>
          </div>
          <div className="profileInnerContainer_text_body">
            <div style={{ display: "flex" }}>
              <div className="avatarImage">
                <img
                  src={postImage}
                  alt=""
                  width="100%"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div>
                <p>nick_name</p>А вы знаете, что такое культурная апроприация?🤔
                Наши коллеги из @cabar.asia создали материал об этом. Подробнее
                об этом читайте в карточках. Журналисты заметили, что в
                последние годы этнические мотивы и традиционные национальные
                узоры стран Центральной Азии вдохновляют дизайнеров и модельеров
                мировых брендов на создание новых коллекций. Однако, отдавая
                дань контрастным цветовым решениям и этностилю, не всегда и не
                все дизайнеры указывают происхождение этих мотивов.
              </div>
            </div>
            {/* <div>
              Наши коллеги из @cabar.asia создали материал об этом. Подробнее об
              этом читайте в карточках. Журналисты заметили, что в последние
              годы этнические мотивы и традиционные национальные узоры стран
              Центральной Азии вдохновляют дизайнеров и модельеров мировых
              брендов на создание новых коллекций. Однако, отдавая дань
              контрастным цветовым решениям и этностилю, не всегда и не все
              дизайнеры указывают происхождение этих мотивов.
            </div> */}
          </div>
        </div>
      </div>
      <div className="profileModalCloseBtn">
        <button onClick={() => setModal(false)}>x</button>
      </div>
    </div>
  );
}

export default ProfileModal;

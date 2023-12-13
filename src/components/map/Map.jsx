import "./map.css";

export const Map = () => {
  return (
    <section className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.3143996141116!2d-70.92586122517177!3d41.62733518107929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4e3eed29ad9cb%3A0x7bf95d7e64562efb!2sGriffin%20Ct%2C%20New%20Bedford%2C%20MA%2002740%2C%20USA!5e0!3m2!1sde!2sse!4v1702467887562!5m2!1sde!2sse"
        width="100%"
        height="450"
      ></iframe>
      <div className="sign">
        <h2 className="visit-us">Come visit us!</h2>
        <p>2219 Griffin Street</p>
        <p>San Francisco</p>
      </div>
    </section>
  );
};

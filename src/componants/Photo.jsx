export default function Photo() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/KIV2QLHNKJDQVK4YEGFQJJ5HHY.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h1>Oxford University</h1>
            <h5>University of dreams</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

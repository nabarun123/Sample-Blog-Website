export default function Card(props) {
  return (
    <div
      class="card"
      style={{ width: "18rem", heigth: "18rem", margin: "20px" }}
    >
      <img src={props.image} class="card-img-top" alt="..." height="200px" />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

import "./Jumbotron.css";

export default function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">History of Oxford</h1>
      <p className="lead">
        In 1188, the historian, Gerald of Wales, gave a public reading to the
        assembled Oxford dons and in around 1190 the arrival of Emo of
        Friesland, the first known overseas student, set in motion the
        University's tradition of international scholarly links. By 1201, the
        University was headed by a magister scholarum Oxonie, on whom the title
        of Chancellor was conferred in 1214, and in 1231 the masters were
        recognised as a universitas or corporation. In the 13th century, rioting
        between town and gown (townspeople and students) hastened the
        establishment of primitive halls of residence. These were succeeded by
        the first of Oxford's colleges, which began as medieval 'halls of
        residence' or endowed houses under the supervision of a Master.
        University, Balliol and Merton Colleges, which were established between
        1249 and 1264, are the oldest.
      </p>
      <hr className="my-4" />
      <p className="para">
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Learn more
      </a>
    </div>
  );
}

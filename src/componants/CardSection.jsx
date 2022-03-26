import Card from "./Card";

export default function CardSection() {
  return (
    <div
      id="CardSection"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        title="Oxford Building"
        image="https://i.guim.co.uk/img/media/f04165858da0c2b9413dc46825f19507821b0d15/0_408_5976_3584/master/5976.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ef79f2ea426712c1984c718da615cadb"
      />
      <Card
        title="Oxford Library"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnbBN5g8k6-c2sBrOd_e2do_sEYV2Qo0yuUsSYw_-KFPWLq7c9MFwcwEbFvj2xhxKE6I&usqp=CAU"
      />
      <Card
        title="Oxford Department"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3I1OIeSn9Q71jMH4KseH67XrGN3M9APYfqwjDV3G0BzPCdmluPRfF_6EvItKmKvfjQJQ&usqp=CAU"
      />
    </div>
  );
}

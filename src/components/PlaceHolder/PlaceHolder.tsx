import "./PlaceHolder.css";

const PlaceHolder = ({ title }: { title: string }) => {
  return (
    <div className="placeholder">
      <h1>{title}</h1>
    </div>
  );
};

export default PlaceHolder;

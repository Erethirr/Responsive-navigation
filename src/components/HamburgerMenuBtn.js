export default function HamburgerMenuBtn(props) {
  const { className, handleClick } = props;

  return (
    <div className={className} onClick={handleClick}>
      <hr className=" my-1 " />
      <hr className=" my-1" />
      <hr className=" my-1" />
    </div>
  );
}

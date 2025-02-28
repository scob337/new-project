
export default function CardWithImg() {
    const Img =
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";
  return (
    <div className=" w-[200px] h-[230px] rounded-[20px] bg-white  ">
      <img
        src={Img}
        alt="Image"
        className="w-full h-[70%] object-center object-cover rounded-4xl"
      />
      <h1 className="text-[#EB5C95] px-3 font-semibold text-xl">
        Test Test Test
      </h1>
      <p className="text-gray-500 px-3">This is a test card</p>
    </div>
  );
}

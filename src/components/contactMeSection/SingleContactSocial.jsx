const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border cursor-pointer text-orange rounded-full p-3 flex items-center justify-center transition-all duration-[450] ease-in-out hover:bg-orange  hover:border-none hover:text-white hover:scale-[1.08] ">
      <a href={link}>
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;

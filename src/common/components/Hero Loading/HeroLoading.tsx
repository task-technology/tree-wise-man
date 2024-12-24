const HeroLoading = () => {
  return (
    <div className="relative h-60 md:h-screen animate-pulse">
      <div className="h-full mySwiper">
        <div className="relative h-full bg-cover bg-center">
          <div className="absolute inset-0 bg-solidBlack/40 opacity-100 "></div>
          <main className="relative z-10 min-h-screen">
            <div className="flex items-center  md:min-h-screen w-full relative overflow-hidden px-2 md:px-0">
              <section className="w-3/5  h-60 md:h-screen flex items-center justify-center">
                <div className="z-50 pl-0 md:pl-20">
                  <div className="space-y-1 md:space-y-5">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              </section>
              <div className="w-2/5 mx-auto rounded-3xl">
                <div className="h-32 w-28  md:h-72 md:w-60 mx-auto rounded-md"></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default HeroLoading;

import Button from "@components/Button";

const News_letter_sec = () => {
  return (
    <section className="px-1">
      <h3 className="text-2xl font-[600] mb-4 uppercase">Newsletter</h3>

      <form>
        <input
          type="email"
          required
          className=" text-black bg-white w-full rounded-lg border border-primary min-h-[50px] lg:min-h-[50px] text-lg px-4 py-2 focus:outline-none focus:ring-2 focus:secondary mb-4"
          placeholder="Enter your email address"
        />
        <Button
          type="submit"
          className="rounded-lg w-full bg-secondary/80 uppercase shadow-md text-lg min-h-[50px] lg:min-h-[40px]"
        >
          Subscribe Now
        </Button>
      </form>
    </section>
  );
};

export default News_letter_sec;

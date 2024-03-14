import Board from "@/components/Board";
import Header from "@/components/Header";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="h-screen">
      <Header />
      <Board />
    </main>
  );
};

export default page;

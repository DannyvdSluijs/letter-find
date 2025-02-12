import Header from "@/components/Header";
import LetterGrid from "@/components/LetterGrid";

export default function Page() {
  return (
      <>
          <main
              className="h-[280mm] w-[210mm] overflow-hidden rounded-md shadow-lg flex flex-col items-center justify-center min-h-screen bg-stone-100">
                  <Header/>
                  <LetterGrid numberOfRows={9}/>
          </main>
      </>
  );
}
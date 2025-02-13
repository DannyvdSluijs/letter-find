import Header from "@/components/Header";
import LetterGrid from "@/components/LetterGrid";

export default function Page() {
  return (
      <>
          <main
              className="h-[297mm] w-[210mm] overflow-hidden rounded-md shadow-lg flex flex-col items-center justify-start bg-stone-100 pt-8">
                  <Header/>
                  <LetterGrid numberOfRows={9}/>
          </main>
      </>
  );
}
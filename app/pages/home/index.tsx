import { Button } from "~/components/ui/button";

export function Home() {
  return (
    <div className="p-10">
      <div className="max-w-[800px] w-full mx-auto bg-gray-100 p-4 rounded-lg">
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Homeです。
        </h2>
      </div>
      <Button>Click me</Button>
    </div>
  );
}

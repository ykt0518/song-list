export function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="bg-[#333] py-1">
      <div className="px-4">
        <p className="text-white text-sm text-center">
          &copy;${year} Song List
        </p>
      </div>
    </footer>
  );
}

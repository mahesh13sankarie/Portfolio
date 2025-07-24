const Resume = () => {
  return (
    <div className="min-h-screen pt-32 px-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-10 gradient-text">
        My Resume </h1>
      <iframe
        src="/resume.pdf"
        title="Resume"
        className="w-full max-w-4xl h-[80vh] border rounded-lg shadow-md"
      />
      <a
        href="/resume.pdf"
        download
        className="mt-6 text-primary underline hover:text-primary/80 transition"
      >
        ⬇ Download Resume
      </a>
    </div>
  );
};

export { Resume };

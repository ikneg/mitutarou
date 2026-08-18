import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[768px] px-5 sm:px-8 md:px-0">
      {/* Hero */}
      <section className="flex w-full items-center gap-3 border-b border-black py-14 sm:gap-6 md:min-h-[600px] md:gap-10 md:py-0">
        <div className="flex w-[48%] max-w-[170px] shrink-0 border-r border-black pr-3 sm:w-[280px] sm:max-w-none sm:pr-6 md:w-[360px] md:pr-10">
          <Image
            src="/hero-mono.gif"
            alt="キャンパスライフ"
            width={300}
            height={300}
            priority
            className="h-auto w-full"
            sizes="(max-width: 639px) 48vw, (max-width: 767px) 280px, 360px"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2 sm:gap-4 md:w-auto md:flex-none md:gap-5">
          <h1 className="text-[clamp(2rem,10vw,3rem)] font-bold tracking-[-0.05em] sm:text-6xl md:text-9xl">
            ikneg
          </h1>

          <p className="text-xs tracking-[-0.05em] sm:text-base md:text-lg">
            プログラマー(?) / アニオタなりかけ
          </p>
        </div>
      </section>

      {/* About */}
      <section className="flex w-full flex-col items-center py-12 md:min-h-[300px] md:py-0">
        <h2 className="pb-8 text-3xl font-bold tracking-[-0.05em] sm:text-4xl md:py-10">
          About me
        </h2>

        <p className="max-w-prose text-base leading-relaxed tracking-[-0.05em] sm:text-lg">
          高校生。趣味はプログラミングと読書(?)。社会性がない。好きな漫画はmonoとひびめし。音楽を作っていた過去を忘却しようとしている。<br />
          python / typescript。ai前提である。atcoder灰/黒。精進してまいります。
        </p>
      </section>

      {/* Links */}
      <section className="flex w-full flex-col items-center py-12 md:min-h-[500px] md:py-0">
        <h2 className="pb-8 text-3xl font-bold tracking-[-0.05em] sm:text-4xl md:py-10">
          Links
        </h2>

        <div className="grid w-full max-w-[320px] grid-cols-1 border border-black md:w-auto md:max-w-none md:grid-cols-3">
          <a
            href="https://atcoder.jp/users/genki_js"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[220px] w-full flex-col items-center justify-between border-b border-black p-8 transition-colors hover:bg-black hover:text-white md:h-[250px] md:w-[250px] md:border-b-0 md:border-r"
          >
            <span className="self-start text-sm">01</span>

            <h3 className="text-3xl font-bold tracking-[-0.05em]">AtCoder</h3>

            <span className="self-end text-xl">↗</span>
          </a>

          <a
            href="https://x.com/abkd1116"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[220px] w-full flex-col items-center justify-between border-b border-black p-8 transition-colors hover:bg-black hover:text-white md:h-[250px] md:w-[250px] md:border-b-0 md:border-r"
          >
            <span className="self-start text-sm">02</span>

            <h3 className="text-3xl font-bold tracking-[-0.08em]">Twitter</h3>

            <span className="self-end text-xl">↗</span>
          </a>

          <a
            href="https://github.com/ikneg"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[220px] w-full flex-col items-center justify-between p-8 transition-colors hover:bg-black hover:text-white md:h-[250px] md:w-[250px]"
          >
            <span className="self-start text-sm">03</span>

            <h3 className="text-3xl font-bold tracking-[-0.05em]">GitHub</h3>

            <span className="self-end text-xl">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

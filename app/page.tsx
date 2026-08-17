import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[768px] min-h-screen mx-auto">
      {/* Hero */}
      <section className="flex min-h-[600px] w-full items-center gap-10 border-b border-black">
        <div className="border-r border-black pr-10">
          <Image
            src="/ep03_2.gif"
            alt="キャンパスライフ"
            width={300}
            height={300}
            priority
          />
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-9xl font-bold tracking-[-0.05em]">ikneg</h1>

          <p className="text-lg tracking-[-0.05em]">
            プログラマー(?) / アニオタなりかけ
          </p>
        </div>
      </section>

      {/* About */}
      <section className="flex min-h-[300px] w-full flex-col items-center">
        <h2 className="py-10 text-4xl font-bold tracking-[-0.05em]">
          About me
        </h2>

        <p className="text-lg tracking-[-0.05em]">高校生。趣味はプログラミングと読書(?)。社会性がない。好きな漫画はmonoとひびめし。音楽を作っていた過去を忘却しようとしている。<br>
        </br>
        python / typescript。ai前提である。atcoder灰/黒。精進してまいります。
        </p>
      </section>

        {/* Links */}
        <section className="flex min-h-[500px] w-full flex-col items-center">
          <h2 className="py-10 text-4xl font-bold tracking-[-0.05em]">
            Links
          </h2>

          <div className="grid grid-cols-1 border border-black md:grid-cols-3">
            <a
              href="https://atcoder.jp/users/genki_js"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[250px] w-[250px] flex-col items-center justify-between p-8 transition-colors hover:bg-black hover:text-white"
            >
              <span className="self-start text-sm">01</span>

              <h3 className="text-3xl font-bold tracking-[-0.05em]">
                AtCoder
              </h3>

              <span className="self-end text-xl">↗</span>
            </a>

            <a
              href="https://x.com/abkd1116"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[250px] w-[250px] flex-col items-center justify-between border-y border-black p-8 transition-colors hover:bg-black hover:text-white md:border-x md:border-y-0"
            >
              <span className="self-start text-sm">02</span>

              <h3 className="text-3xl font-bold tracking-[-0.08em]">
                Twitter
              </h3>

              <span className="self-end text-xl">↗</span>
            </a>

            <a
              href="https://github.com/ikneg"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[250px] w-[250px] flex-col items-center justify-between p-8 transition-colors hover:bg-black hover:text-white"
            >
              <span className="self-start text-sm">03</span>

              <h3 className="text-3xl font-bold tracking-[-0.05em]">
                GitHub
              </h3>

              <span className="self-end text-xl">↗</span>
            </a>
          </div>
        </section>
    </main>
  );
}

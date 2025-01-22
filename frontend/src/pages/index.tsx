import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { queryPage, type Page } from "~/api/queryPage";
import { renderBlock } from "~/utils/renderBlock";

export default function Home() {
  const [page, setPage] = useState<Page | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPage() {
      const result = await queryPage();
      setPage(result);
      setLoading(false);
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchPage();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!page) {
    return <p>Page not found</p>;
  }

  return (
    <div>
      <Head>
        <title>{page.title}</title>
      </Head>
      <div className={"flex-col gap-2"}>
        {page.blocks?.map((block, index) => {
          return renderBlock({ block });
        })}
      </div>
    </div>
  );
}

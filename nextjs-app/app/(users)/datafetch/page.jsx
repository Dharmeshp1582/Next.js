import { Suspense } from "react";
import DataFetchClient from "./clientcomp/page";

const DataFetch =() => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DataFetchClient />
    </Suspense>
  );
}


export default DataFetch
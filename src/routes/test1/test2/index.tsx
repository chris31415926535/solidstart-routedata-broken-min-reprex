// /routes/test1/test2/index.tsx

import { createRouteData, useRouteData } from "solid-start";

export function routeData() {
    const test2 = createRouteData(async () => {
        return "test2";
    });
    return { test2 }
}

export default function Test2() {
    // test1 doesn't load
    const { test1, test2 } = useRouteData();
    // when we log, we only see test2
    const data = useRouteData();
    console.log(data)
    return (
        <main>
            {/* <p>{test1()}</p> // this crashes!!! */}
            <p>{test2()}</p>
        </main>
    )
}
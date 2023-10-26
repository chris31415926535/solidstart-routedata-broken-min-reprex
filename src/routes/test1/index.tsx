// ~/test1/index.tsx
import { createRouteData, useRouteData } from "solid-start";

export function routeData() {
    const test1 = createRouteData(() => {
        return "test1";
    });
    return { test1 };
}

export default function Testing() {

    const { test1 } = useRouteData<typeof routeData>();

    return (
        <main>
            <p>testing top page</p>
            <p>{test1()}</p>
        </main>
    )
}
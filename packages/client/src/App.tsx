import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import useSWR from "swr";
import { Item, fetcher, postItem } from "./utils/fetcher";
import { ListItem } from "./components/ListItem";

export const App = () => {
    const { data, error, isLoading, mutate } = useSWR<Item[]>("items", fetcher);

    const onItemAdd = async (label: string) => {
        const item = {
            label,
            isDone: false,
            createdAt: Date.now(),
            id: (data?.length ?? 0) + 1,
        };
        await postItem(item);

        mutate(data ? [...data, item] : [item]);
    };

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header onItemAdd={onItemAdd}>To Do app</Header>
                    <List>
                        {data?.map((item) => (
                            <ListItem
                                key={item.id}
                                {...item}
                                onItemDelete={() => console.warn("unimplemented")}
                                onItemLabelEdit={() => console.warn("unimplemented")}
                                onItemDoneToggle={() => console.warn("unimplemented")}
                            />
                        ))}
                    </List>
                    <Footer />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};

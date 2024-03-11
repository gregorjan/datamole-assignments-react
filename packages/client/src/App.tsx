import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import useSWR from "swr";
import { Item, deleteItem, fetcher, postItem, putItem } from "./utils/fetcher";
import { ListItem } from "./components/ListItem";

export const App = () => {
    const { data, error, isLoading, mutate } = useSWR<Item[]>("items", fetcher);

    const onItemAdd = async (label: string) => {
        if(!data) return

        const item = {
            label,
            isDone: false,
            createdAt: Date.now(),
            id: (data?.length ?? 0) + 1,
        };

        await postItem(item);

        mutate([...data, item]);
    };

    const onItemEdit = async (item: Partial<Item>) => {
        if(!data) return

        await putItem(item);

        mutate(data ? data.map((i) => (i.id === item.id ? { ...i, ...item } : i)) : undefined);
    };

    const onItemDelete = async (item: Item) => {
        if(!data) return

        await deleteItem(item);
      
        mutate(data.filter((i) => i.id !== item.id));
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
                                onItemDelete={() => onItemDelete(item)}
                                onItemLabelEdit={(label) => onItemEdit({ ...item, label })}
                                onItemDoneToggle={(isDone) => onItemEdit({ ...item, isDone })}
                            />
                        ))}
                    </List>
                    <Footer />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};

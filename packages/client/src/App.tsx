import { useMemo } from "react";
import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import useSWR from "swr";
import { Item, deleteItem, fetcher, postItem, putItem } from "./utils/fetcher";
import { ListItem } from "./components/ListItem";
import { v1 as uuid } from "uuid";

const sortItemsByDate = (a: Item, b: Item) => {
    return b.createdAt - a.createdAt;
};

export const App = () => {
    const { data, error, isLoading, mutate } = useSWR<Item[]>("items", fetcher);

    const onItemAdd = async (label: string) => {
        if (!data) return;

        const item = {
            label,
            isDone: false,
            createdAt: Date.now(),
            id: uuid(),
        };

        await postItem(item);

        mutate([...data, item]);
    };

    const onItemEdit = async (item: Partial<Item>) => {
        if (!data) return;

        await putItem(item);

        mutate(data ? data.map((i) => (i.id === item.id ? { ...i, ...item } : i)) : undefined);
    };

    const onItemDelete = async (item: Item) => {
        if (!data) return;

        await deleteItem(item);

        mutate(data.filter((i) => i.id !== item.id));
    };

    const todoItems = useMemo(() => {
        return data?.filter((i) => !i.isDone).sort(sortItemsByDate);
    }, [data]);

    const doneItems = useMemo(() => {
        return data?.filter((i) => i.isDone).sort(sortItemsByDate);
    }, [data]);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header onItemAdd={onItemAdd}>To Do app</Header>
                    <List>
                        {todoItems?.map((item) => (
                            <ListItem
                                key={item.id}
                                {...item}
                                onItemDelete={() => onItemDelete(item)}
                                onItemLabelEdit={(label) => onItemEdit({ ...item, label })}
                                onItemDoneToggle={(isDone) => onItemEdit({ ...item, isDone })}
                            />
                        ))}
                        {doneItems?.map((item) => (
                            <ListItem
                                key={item.id}
                                {...item}
                                onItemDelete={() => onItemDelete(item)}
                                onItemLabelEdit={(label) => onItemEdit({ ...item, label })}
                                onItemDoneToggle={(isDone) => onItemEdit({ ...item, isDone })}
                            />
                        ))}
                    </List>
                    <Footer todoItems={todoItems?.length} doneItems={doneItems?.length} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};

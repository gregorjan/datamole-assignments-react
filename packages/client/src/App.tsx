import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import useSWR from "swr";
import { Item, fetcher } from "./utils/fetcher";
import { ListItem } from "./components/ListItem";

export const App = () => {
    const { data, error, isLoading } = useSWR<Item[]>("items", fetcher);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    console.log(data);
    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
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

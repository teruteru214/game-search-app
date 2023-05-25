import axios from "axios";

const API_KEY = "1072170842076522114";
const BASE_URL =
  "https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404";

interface Game {
  title: string;
  genre: string;
  price: number;
}

export async function searchGames(): Promise<Game[]> {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        applicationId: API_KEY,
        booksGenreName: "-おもちゃ,-その他",
        hits: 10,
      },
    });

    const gameList: Game[] = response.data.Items.map((item: any) => ({
      title: item.title,
      genre: item.booksGenreName,
      price: item.itemPrice,
    }));

    return gameList;
  } catch (error) {
    throw new Error("Failed to fetch games");
  }
}

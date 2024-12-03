import request from "../utils/request";
import { Quote, Quotes } from "../types/quote.type";
import { AxiosResponse } from "axios";

export const quotesApi = async (): Promise<Quote[]> => {
    const response: AxiosResponse<Quotes> = await request.get<Quotes>('')
    return response.data.quotes
}
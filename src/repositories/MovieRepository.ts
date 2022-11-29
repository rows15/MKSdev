import { AppDataSource } from "../data-source";
import { Movie } from "../entities/Movie";

export const movieRepository = AppDataSource.getRepository(Movie)
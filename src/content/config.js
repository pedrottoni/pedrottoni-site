// 1. Importe utilitários do `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Defina sua(s) coleção(ões)
const collectionProdutos = defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    content: z.array(
      z.object({
        img: image(),
        tag: z.string(),
        nome: z.string(),
        link: z.string().optional(),
        page: z.array(z.string()),
      })
    ),
  })
});
const collectionAlunos = defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    content: z.array(
      z.object({
        depoimento: z.string().optional(),
        nome: z.string().optional(),
        foto: image().optional(),
        capa: image().optional(),
        tag: z.string().optional(),
        sobre: z.string().optional(),
        turma: z.string().optional(),
        title: z.string().optional(),
        text: z.string().optional(),
        video: z.string().url().optional(),
        page: z.array(z.string()),
      })
    ),
  })
});
// 3. Exporte um único objeto `collections` para registrar sua coleção(ões)
//    Essa chave deve corresponder com o nome da pasta da coleção em "src/content"
export const collections = {
  "produtos": collectionProdutos,
  "alunos": collectionAlunos,
};
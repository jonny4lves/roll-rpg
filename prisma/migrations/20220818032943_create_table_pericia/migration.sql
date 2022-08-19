-- CreateTable
CREATE TABLE "pericia" (
    "id_pericia" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "pericia_pkey" PRIMARY KEY ("id_pericia")
);

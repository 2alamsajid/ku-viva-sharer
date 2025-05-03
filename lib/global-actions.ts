'use server'


import { TCreateViva, TViva } from "./global-types";
import prisma from "./prisma";

export async function getVivas(year: string, subject: string): Promise<{ data: TViva[] | null, message: string }>  {
  const vivaList = await prisma.viva.findMany({
    where: {
      year: parseInt(year),
      subject: subject,
    },
  });

  if (!vivaList || vivaList.length === 0) {
    return { data: null, message: 'No viva questions found' };
  }

  return { data: vivaList, message: '' };
}

export async function addViva(viva:TCreateViva): Promise<{ data: TViva | null, message: string }> {
  const newViva = await prisma.viva.create({
    data: viva,
  });

  if (!newViva) {
    return { data: null, message: 'Failed to add viva question' };
  }

  return { data: newViva, message: '' };
}

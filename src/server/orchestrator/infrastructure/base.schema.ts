import { Priority } from '@civitai/client';
import z from 'zod';
import { maxUpscaleSize } from '~/server/common/constants';
import { GenerationType } from '~/server/orchestrator/infrastructure/base.enums';

export const promptSchema = z
  .string()
  .max(1500, 'Prompt cannot be longer than 1500 characters')
  .default('');

export const negativePromptSchema = z
  .string()
  .max(1000, 'Prompt cannot be longer than 1000 characters')
  .default('');

export type SourceImageProps = z.input<typeof sourceImageSchema>;
export const sourceImageSchema = z.object({
  url: z.string().startsWith('https://orchestration').includes('.civitai.com'),
  width: z.number().max(maxUpscaleSize),
  height: z.number().max(maxUpscaleSize),
  upscaleWidth: z.number().max(maxUpscaleSize).optional(),
  upscaleHeight: z.number().max(maxUpscaleSize).optional(),
});

export const seedSchema = z.number().optional();
const prioritySchema = z.nativeEnum(Priority).default('low').catch('low');

const baseSchema = z.object({
  priority: prioritySchema,
});

export const textEnhancementSchema = baseSchema.extend({
  type: z.literal(GenerationType.txt2vid).catch(GenerationType.txt2vid),
  prompt: promptSchema,
});

export const imageEnhancementSchema = baseSchema.extend({
  type: z.literal(GenerationType.img2vid).catch(GenerationType.img2vid),
  sourceImage: sourceImageSchema,
});

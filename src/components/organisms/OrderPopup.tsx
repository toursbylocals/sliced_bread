'use client';

import { useOrderPopupStore } from '@/stores/popup';
import { AnimatePresence, motion } from 'framer-motion';
import { Typography } from '../atoms/Typography';
import Button from '../atoms/Button';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function OrderPopup() {
  const { status, content, close } = useOrderPopupStore();

  return (
    <AnimatePresence mode="wait">
      {status && (
        <motion.div
          className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.2 }}
        >
          <motion.div
            className="relative z-[1] flex w-[60vw] flex-col gap-y-[40px] rounded-xl bg-white p-6 md:gap-y-[60px] md:p-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ ease: 'easeInOut', duration: 0.2 }}
          >
            <Button
              color="light"
              onClick={close}
              className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full !p-2"
            >
              <Icon icon="ic:round-close" width="24" height="24" />
            </Button>

            <div className="flex flex-col gap-y-8">
              <Typography variant="heading3" color="text-primary-200">
                {content.title}
              </Typography>

              <Typography variant="description" color="text-primary-300">
                <span
                  dangerouslySetInnerHTML={{ __html: content.description }}
                />
              </Typography>
            </div>

            <Link href={`/order/${content.id}`} className="ml-auto">
              <Button onClick={close}>
                <span>Detail</span>
                <Icon icon="majesticons:chevron-right" width="24" height="24" />
              </Button>
            </Link>
          </motion.div>

          <div className="absolute left-0 top-0 z-[0] h-full w-full bg-black/50"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

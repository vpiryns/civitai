import { createStyles, Grid } from '@mantine/core';
import React from 'react';
import { ChatList } from '~/components/Chat/ChatList';
import { useChatContext } from '~/components/Chat/ChatProvider';
import { ExistingChat } from '~/components/Chat/ExistingChat';
import { NewChat } from '~/components/Chat/NewChat';

const useStyles = createStyles((theme) => ({
  chatList: {
    borderRight: theme.colorScheme === 'dark' ? '1px solid #373A40' : '1px solid #CED4DA',
    height: '100%',
    // [containerQuery.smallerThan('xs')]: {
    //   height: '200px',
    // },
  },
}));

export function ChatWindow() {
  const { state } = useChatContext();
  const { classes } = useStyles();

  return (
    <Grid h="100%" m={0}>
      {/* List and Search Panel */}
      <Grid.Col span={2} xs={4} p={0} className={classes.chatList}>
        <ChatList />
      </Grid.Col>
      {/* Chat Panel */}
      <Grid.Col span={10} xs={8} p={0} h="100%">
        {!state.existingChatId ? <NewChat /> : <ExistingChat />}
      </Grid.Col>
    </Grid>
  );
}

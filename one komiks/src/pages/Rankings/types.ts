export interface RankingItem {
  rank: number;
  title: string;
  author: string;
  rating: number;
  views: string;
  change: 'up' | 'down' | 'same';
  cover: string;
}
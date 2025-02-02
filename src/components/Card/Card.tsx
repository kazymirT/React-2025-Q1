import React from 'react';
import { CardProps } from './types';
import styles from './Card.module.scss';

export default class Card extends React.Component<CardProps> {
  render(): React.ReactNode {
    const { data } = this.props;
    const { image, name, status, gender, created } = data;

    return (
      <div className={styles.card}>
        <img
          src={image || 'https://via.placeholder.com/300'}
          alt={name ? `Image of ${name}` : 'Character image'}
          width={300}
          height={300}
        />
        <div className={styles.content}>
          <h2>{name || 'Unknown Name'}</h2>
          <ul>
            <li>
              <strong>Status:</strong> {status || 'Unknown'}
            </li>
            <li>
              <strong>Gender:</strong> {gender || 'Unknown'}
            </li>
            <li>
              <strong>Created:</strong> {created || 'N/A'}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

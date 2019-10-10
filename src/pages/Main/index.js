import React, { Component } from 'react';

import { FaPlus, FaSpinner } from 'react-icons/fa';

import { Container, Form, SubmitButton, List } from './styles';
import deezer from '../../assets/deezer.png';
import api from '../../services/api';

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    newMusc: '',
    artistas: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const artistas = localStorage.getItem('artistas');

    if (artistas) {
      this.setState({ artistas: JSON.parse(artistas) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { artistas } = this.state;

    if (prevState.artistas !== artistas) {
      localStorage.setItem('artistas', JSON.stringify(artistas));
    }
  }

  handleInput = e => {
    this.setState({ newMusc: e.target.value, error: null });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newMusc, artistas } = this.state;

    try {
      if (newMusc === '') {
        throw new Error('Você precisa indicar um artista');
      }

      const checkArt = artistas.find(
        r => r.nome.toUpperCase() === newMusc.toUpperCase()
      );

      if (checkArt) {
        throw new Error('Artista duplicado');
      }

      const response = await api.get(`${newMusc}`);

      const data = {
        nome: response.data.name,
        detalhes: response.data.link,
      };

      this.setState({
        artistas: [...artistas, data],
        newMusc: '',
        loading: false,
      });
      this.setState({ error: false });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleDelete = arts => {
    const { artistas } = this.state;
    this.setState({ artistas: artistas.filter(t => t !== arts) });
  };

  render() {
    const { newMusc, artistas, loading, error } = this.state;
    return (
      <Container>
        <h1>
          <img src={deezer} alt="deezer" height={48} />
          Artistas
        </h1>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Adicionar Artista"
            value={newMusc}
            onChange={this.handleInput}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {artistas.map(arts => (
            <li key={arts.nome}>
              <span>{arts.nome}</span>
              <strong>
                <a href={arts.detalhes}>Detalhes</a>
                <button
                  className="button"
                  onClick={() => this.handleDelete(arts)}
                  type="button"
                >
                  Remover
                </button>
              </strong>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

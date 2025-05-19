//LA IDEA DE LA DESESTRUCTURACION ES QUE RAPIDAMENTE SE EXTRAEN PROPIEDADES DE OBJETOS
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New song';

const {
    song:anotherSong, 
    songDuration: duration,
    details
} = audioPlayer;

const {author} = details; 

// console.log('Song', anotherSong);
// console.log('Duration', duration)
// console.log('Author:', author)

const [, , trunks= 'not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];// si no ocupo los diferentes datos, solo se usa la coma

console.log('personaje 3:', trunks); 







export {}
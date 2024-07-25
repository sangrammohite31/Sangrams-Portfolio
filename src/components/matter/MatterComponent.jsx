import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

// Import your images
import image1 from '/S1.png';
import image2 from '/A1.png';
import image3 from '/N1.png';
import image4 from '/G1.png';
import image5 from '/R1.png';
import image6 from '/A1.png';
import image7 from '/M1.png';
import image8 from '/name1.png';

const MixedShapes = () => {
    const scene = useRef(null);
    const engine = useRef(Matter.Engine.create());
    const render = useRef(null);

    useEffect(() => {
        const { Engine, Render, Runner, Composite, MouseConstraint, Mouse, Bodies } = Matter;
        // Configure gravity (default is { x: 0, y: 1 })
        engine.current.gravity.x = 0.01;
        engine.current.gravity.y = 0.3; 
        const width = 600;
        const height = 500;

        // create renderer
        render.current = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width,
                height,
                showAngleIndicator: true,
                wireframes: false,
                background: 'black',
            }
        });

        Render.run(render.current);

        // create runner
        const runner = Runner.create();
        Runner.run(runner, engine.current);

        // List of image paths
        const images = [
            image1, image2, image3, image4, image5,
            image6, image7, image8
        ];

        // add bodies with images
        const stack = Composite.create();

        images.forEach((image, index) => {
            const body = Bodies.rectangle(100 + index * 50, 50, 50, 50, {
                restitution: 1.04, 
                render: {
                    sprite: {
                        texture: image,
                        xScale: 0.5, // Adjust scale as needed
                        yScale: 0.5  // Adjust scale as needed
                    }
                }
            });
            Composite.add(stack, body);
        });

        Composite.add(engine.current.world, stack);

        Composite.add(engine.current.world, [
            // walls
            Bodies.rectangle(400, 0, 800, 50, { isStatic: true , render: {
                fillStyle: 'black',
              },}),
            Bodies.rectangle(400, 600, 800, 50, { isStatic: true , render: {
                fillStyle: 'black',
              },}),
            Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: {
                fillStyle: 'black',
              }, }),
            Bodies.rectangle(0, 300, 50, 600, { isStatic: true , render: {
                fillStyle: 'black',
              },})
        ]);

        // add mouse control
        const mouse = Mouse.create(render.current.canvas),
            mouseConstraint = MouseConstraint.create(engine.current, {
                mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });

        Composite.add(engine.current.world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.current.mouse = mouse;

        // fit the render viewport to the scene
        Render.lookAt(render.current, {
            min: { x: 0, y: 0 },
            max: { x: 800, y: 600 }
        });

        return () => {
            Matter.Render.stop(render.current);
            Matter.Runner.stop(runner);
            Matter.Composite.clear(engine.current.world);
            Matter.Engine.clear(engine.current);
            render.current.canvas.remove();
        };
    }, []);

    return <div ref={scene} />;
};

export default MixedShapes;

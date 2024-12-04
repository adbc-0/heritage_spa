import { ElementRef, useEffect, useRef } from "react";
import { Params, useNavigate, useParams } from "react-router";
import * as topola from "topola";

import { RoutePaths } from "@/constants/RoutePaths";
import { useHeritage } from "@/contexts/heritageContext";
import { transformDatasetForPerson } from "@/utils/heritage";

// what will happen with ozimki root. Will dummy node be rendered?
export function PersonTree() {
    const { id } = useParams<Params>();
    const heritage = useHeritage();
    const navigate = useNavigate();
    const svgElement = useRef<ElementRef<"svg">>(null);
    useEffect(() => {
        if (!id) {
            return;
        }
        if (!heritage) {
            return;
        }
        const svgRef = svgElement.current;
        topola
            .createChart({
                json: transformDatasetForPerson(heritage, id),
                svgSelector: "#relative",
                chartType: topola.HourglassChart,
                renderer: topola.SimpleRenderer,
                indiCallback(data) {
                    void navigate(`${RoutePaths.OSOBY}/${data.id}`);
                },
            })
            .render();
        return () => {
            if (!svgRef) {
                throw new Error("cannot cleanup svg element");
            }
            svgRef.replaceChildren();
        };
    }, [heritage, id, navigate]);
    return (
        <div className="m-3">
            <h2 className="text-center font-semibold">Drzewo</h2>
            <div className="mt-3 mx-auto bg-background border border-border w-[80%] md:w-[50%] h-[60vh]">
                <svg ref={svgElement} id="relative" className="rounded-md" />
            </div>
        </div>
    );
}
